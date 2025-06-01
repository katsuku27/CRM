<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategotyResource\Pages;
use App\Filament\Resources\CategotyResource\RelationManagers;
use App\Models\Categoty;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CategotyResource extends Resource
{
    protected static ?string $model = Categoty::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategoties::route('/'),
            'create' => Pages\CreateCategoty::route('/create'),
            'edit' => Pages\EditCategoty::route('/{record}/edit'),
        ];
    }
}
