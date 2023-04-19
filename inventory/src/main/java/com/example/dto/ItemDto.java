package com.example.dto;

public class ItemDto {

    private final int sku;
    private final int quantity;

    public ItemDto(int sku, int quantity) {
        this.sku = sku;
        this.quantity = quantity;
    }

    public int getSku() {
        return sku;
    }

    public int getQuantity() {
        return quantity;
    }
}
