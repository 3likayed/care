<?php

// app/Services/UserService.php

namespace App\Services;

use App\Models\Doctor;
use App\Models\Employee;

class UserService
{


    public static function updateOrCreateUser($userable, array $data)
    {

        $user = $userable->user;

        return $user ?
            self::updateExistingUser($userable, $data) :
            self::createNewUser($userable, $data);

    }

    private static function updateExistingUser($userable, array $data)
    {
        $user = $userable->user;

        if (!isset($data['password']) || !$data['password']) {
            unset($data['password']);
        }
        $userable->user->update($data);

        self::syncUserRole($user, $data['role'] ?? null);

        return $user;
    }

    private static function syncUserRole($user, $role): void
    {
        if ($role && $user->role?->id != $role) {
            $user->syncRoles($role);
            $user->save();

        }

    }

    private static function createNewUser($userable, array $data)
    {
        $user = $userable->user()->create($data);
        self::syncUserRole($user, $data['role']);

        return $user;
    }

    public static function isSuperAdmin()
    {
        return auth()->user()->isSuperAdmin();
    }

    public static function authDoctor(): ?Doctor
    {
        if (auth()->user()?->userable_type === Employee::class && auth()->user()?->userable?->employable_type == Doctor::class) {
            return auth()->user()->userable?->employable;
        }

        return null;
    }

    public static function authEmployee(): ?Employee
    {
        if (auth()->user()?->userable_type === Employee::class) {
            return auth()->user()->userable;
        }

        return null;
    }

}
