<?php

namespace App\Filament\Resources\CategotyResource\Pages;

use App\Filament\Resources\CategotyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCategoty extends EditRecord
{
    protected static string $resource = CategotyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
