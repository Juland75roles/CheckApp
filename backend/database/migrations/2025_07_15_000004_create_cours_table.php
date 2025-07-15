<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->unsignedBigInteger('professeur_id');
$table->unsignedBigInteger('filiere_id');
$table->unsignedBigInteger('salle_id')->nullable();

$table->foreign('professeur_id')->references('id')->on('users')->onDelete('cascade');
$table->foreign('filiere_id')->references('id')->on('filieres')->onDelete('cascade');
$table->foreign('salle_id')->references('id')->on('salles')->onDelete('set null');
            $table->dateTime('debut');
            $table->dateTime('fin');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
