<?php

namespace App\Filament\Resources\CategotyResource\Pages;

use App\Filament\Resources\CategotyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCategoties extends ListRecords
{
    protected static string $resource = CategotyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
