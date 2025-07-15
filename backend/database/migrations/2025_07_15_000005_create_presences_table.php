<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('presences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // étudiant
            $table->foreignId('cours_id')->constrained('cours')->onDelete('cascade');
            $table->date('date');
            $table->string('code')->nullable(); // code unique généré par le prof
            $table->enum('statut', ['present','absent','justifie'])->default('absent');
            $table->text('justificatif')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('presences');
    }
};
