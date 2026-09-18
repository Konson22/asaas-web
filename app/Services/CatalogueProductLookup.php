<?php

namespace App\Services;

final readonly class CatalogueProductLookup
{
    private function __construct(
        public string $status,
        public ?array $product = null,
    ) {}

    public static function found(array $product): self
    {
        return new self('found', $product);
    }

    public static function missing(): self
    {
        return new self('missing');
    }

    public static function unavailable(?array $cached = null): self
    {
        return new self('unavailable', $cached);
    }

    public function isMissing(): bool
    {
        return $this->status === 'missing';
    }

    public function isUnavailable(): bool
    {
        return $this->status === 'unavailable';
    }
}
