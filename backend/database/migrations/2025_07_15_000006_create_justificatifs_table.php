<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('justificatifs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('presence_id')->constrained('presences')->onDelete('cascade');
            $table->text('motif');
            $table->string('fichier')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('justificatifs');
    }
};
