<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Game;
use App\Models\User;
use Filament\Tables;
use App\Models\History;
use App\Models\Currency;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Pages\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\HistoryResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\HistoryResource\RelationManagers;
use App\Filament\Resources\HistoryResource\Pages\EditHistory;
use App\Filament\Resources\HistoryResource\Pages\CreateHistory;
use App\Filament\Resources\HistoryResource\Pages\ListHistories;

class HistoryResource extends Resource
{
    protected static ?string $model = History::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('user_id')
                    ->label('User')
                    ->options(User::all()->pluck('name', 'id')) // Mengambil semua User dan membuat options
                    ->searchable() // Opsional: untuk pencarian
                    ->required(),
                Select::make('game_id')
                    ->label('Game')
                    ->options(Game::all()->pluck('name', 'id')) // Mengambil semua game dan membuat options
                    ->searchable() // Opsional: untuk pencarian
                    ->required(),
                Select::make('currency_id')
                    ->label('Currency')
                    ->options(function (callable $get) {
                        $gameId = $get('game_id');
                        if (!$gameId) {
                            return [];
                        }
                        return \App\Models\Currency::where('game_id', $gameId)
                            ->pluck('name', 'id');
                    })
                    ->searchable()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name') // Menampilkan nama game bukan hanya ID
                    ->label('user')
                    ->sortable(),
                Tables\Columns\TextColumn::make('game.name') // Menampilkan nama game bukan hanya ID
                    ->label('Game')
                    ->sortable(),
                Tables\Columns\TextColumn::make('currency.name') // Menampilkan nama currency
                    ->label('Currency')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListHistories::route('/'),
            'create' => Pages\CreateHistory::route('/create'),
            'edit' => Pages\EditHistory::route('/{record}/edit'),
        ];
    }
}
