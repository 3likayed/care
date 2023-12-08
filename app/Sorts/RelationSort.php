<?php

namespace App\Sorts;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Pluralizer;
use Spatie\QueryBuilder\Sorts\Sort;
use Staudenmeir\EloquentHasManyDeep\HasManyDeep;

class RelationSort implements Sort
{

    public function __invoke(Builder $query, bool $descending, string $property)
    {

        $relations = array_slice(explode('.', $property), 0, -1);
        $rel = explode('.', $property);
        $column = end($rel);

        $modelTable = $query->getModel()->getTable();
        $iterationModelTable = $modelTable;


        foreach ($relations as $key => $relation) {
            // Use the actual table name associated with the model
            $related = $query;
            for ($i = 0; $i <= $key; $i++) {
                $rel = \Str::camel($relations[$i]);
                $related = $related->getModel()->$rel();
            }
            $relationTable = $related->getRelated()->getTable();
            if ($related instanceof MorphOne) {
                // Morph relation, get morph type and id
                $morphType = $related->getMorphType();
                $morphId = $related->getForeignKeyName();
                $query->join($relationTable, function ($join) use ($morphType, $morphId, $iterationModelTable, $relationTable, $related) {
                    $join->on("$relationTable.$morphId", '=', "$iterationModelTable.id")
                        ->where("$relationTable.$morphType", '=', $related->getMorphClass());
                });

            }/* elseif ($related instanceof MorphMany) {
                $morphType = $related->getMorphType();
                $morphId = $related->getForeignKeyName();
                $query->join($relationTable, function ($join) use ($morphType, $morphId, $iterationModelTable, $relationTable, $related) {
                    $join->on("$relationTable.$morphId", '=', "$iterationModelTable.id")
                        ->where("$relationTable.$morphType", '=', $related->getMorphClass());
                })->selectRaw("SUM($column)")
                    ->distinct();
            } elseif ($related instanceof HasManyDeep) {
                // Assuming you have access to the intermediate tables and keys
                $relationTable = $related->getRelated()->getTable();
                $intermediateTable = $related->getParent()->getTable();
                $foreignKey = $related->getForeignKeyName();
                $localKey = $related->getLocalKeyName();
                $intermediateKey = $related->getFirstKeyName();

                $query->join($intermediateTable, "$iterationModelTable.$localKey", '=', "$intermediateTable.$intermediateKey")
                    ->join($relationTable, "$intermediateTable.$foreignKey", '=', "$relationTable.id")
                    ->selectRaw("SUM($column)");
            }*/ else {
                $relationColumn = Pluralizer::singular($relationTable);
                $joinCondition = "$iterationModelTable.{$relationColumn}_id";
                $query->join($relationTable, $joinCondition, '=', "$relationTable.id");
            }
            $iterationModelTable = $relationTable;
        }

        $lastRelation = Pluralizer::plural(end($relations));
        $query->select("$modelTable.*")
            ->orderBy("$lastRelation.$column", $descending ? 'desc' : 'asc');
    }
}
