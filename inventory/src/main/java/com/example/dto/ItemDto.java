package com.example.dto;

public class ItemDto {

    private final String sku;
    private final int quantity;

    public ItemDto(String sku, int quantity) {
        this.sku = sku;
        this.quantity = quantity;
    }

    public String getSku() {
        return sku;
    }

    public int getQuantity() {
        return quantity;
    }
}
