<?php

namespace App\Console\Commands;

use App\Models\Appointment;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class UpdateAppointmentsStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'appointments:update-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'update appointment status';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Appointment::whereNull('doctor_id')
            ->where('status', '!=', 'canceled')
            ->whereDate('date', '<', Carbon::today())
            ->update(['status' => 'canceled']);
    }
}
