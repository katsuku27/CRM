<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
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
            'index' => Pages\ListUser::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}

// <?php

// namespace App\Filament\Resources;

// use App\Filament\Resources\UserResource\Pages;
// use App\Filament\Resources\UserResource\RelationManagers;
// use App\Models\User;
// use Filament\Forms;
// use Filament\Forms\Form;
// use Filament\Resources\Resource;
// use Filament\Tables;
// use Filament\Tables\Enums\FiltersLayout;
// use Filament\Tables\Table;
// use Illuminate\Database\Eloquent\Builder;
// use Illuminate\Database\Eloquent\SoftDeletingScope;

// class UserResource extends Resource
// {
//     protected static ?string $model = User::class;

//     protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

//     public static function form(Form $form): Form
//     {
//         return $form
//             ->schema([
//                 Forms\Components\TextInput::make('name')
//                     ->required()
//                     ->maxLength(255),
//             ]);
//     }

// public static function table(Table $table): Table
// {
//     return $table
//         ->columns([
//             Tables\Columns\TextColumn::make('id')
//                 ->label('ID')
//                 ->sortable()
//                 ->searchable()
//                 ->alignCenter(),

//             Tables\Columns\TextColumn::make('name')
//                 ->label('Name')
//                 ->sortable()
//                 ->searchable()
//                 ->alignCenter(),

//             Tables\Columns\TextColumn::make('email')
//                 ->label('Email')
//                 ->sortable()
//                 ->searchable()
//                 ->alignCenter()
//                 ->color('info')
//                 ->formatStateUsing(fn ($state) => "<a class='underline text-blue-300' href='mailto:$state'>$state</a>")
//                 ->html(),

//             Tables\Columns\TextColumn::make('phone')
//                 ->label('Phone')
//                 ->alignCenter()
//                 ->default('+62 827 4558 3751'), // or replace with real field
//         ])
//         ->actions([
//             Tables\Actions\EditAction::make()
//                 ->icon('heroicon-m-pencil-square')
//                 ->iconButton()
//                 ->color('info')
//                 ->tooltip('Edit')
//                 ->label(''),

//             Tables\Actions\DeleteAction::make()
//                 ->icon('heroicon-m-trash')
//                 ->iconButton()
//                 ->color('danger')
//                 ->tooltip('Delete')
//                 ->label(''),
//         ])
//         ->bulkActions([
//             Tables\Actions\BulkActionGroup::make([
//                 Tables\Actions\DeleteBulkAction::make(),
//             ]),
//         ])
//         ->FiltersLayout(FiltersLayout::AboveContent)
//         ->contentGrid([
//             'md' => 1,
//         ])
//         ->paginated(true);
// }

//     public static function getRelations(): array
//     {
//         return [
//             //
//         ];
//     }

//     public static function getPages(): array
//     {
//         return [
//             'index' => Pages\ListUser::route('/'),
//             'create' => Pages\CreateUser::route('/create'),
//             'edit' => Pages\EditUser::route('/{record}/edit'),
//         ];
//     }
// }

