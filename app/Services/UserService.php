<?php
// app/Services/UserService.php
namespace App\Services;

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
        $user = $userable->user->create($data);
        self::syncUserRole($user, $data['role']);
        return $user;
    }
}
