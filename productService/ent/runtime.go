// Code generated by ent, DO NOT EDIT.

package ent

import (
	"github.com/Breigner01/SOEN487-Project3/productService/ent/brand"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/category"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/product"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/schema"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	brandFields := schema.Brand{}.Fields()
	_ = brandFields
	// brandDescName is the schema descriptor for name field.
	brandDescName := brandFields[0].Descriptor()
	// brand.NameValidator is a validator for the "name" field. It is called by the builders before save.
	brand.NameValidator = brandDescName.Validators[0].(func(string) error)
	categoryFields := schema.Category{}.Fields()
	_ = categoryFields
	// categoryDescName is the schema descriptor for name field.
	categoryDescName := categoryFields[0].Descriptor()
	// category.NameValidator is a validator for the "name" field. It is called by the builders before save.
	category.NameValidator = categoryDescName.Validators[0].(func(string) error)
	productFields := schema.Product{}.Fields()
	_ = productFields
	// productDescName is the schema descriptor for name field.
	productDescName := productFields[0].Descriptor()
	// product.NameValidator is a validator for the "name" field. It is called by the builders before save.
	product.NameValidator = productDescName.Validators[0].(func(string) error)
	// productDescDescription is the schema descriptor for description field.
	productDescDescription := productFields[1].Descriptor()
	// product.DefaultDescription holds the default value on creation for the description field.
	product.DefaultDescription = productDescDescription.Default.(string)
	// product.DescriptionValidator is a validator for the "description" field. It is called by the builders before save.
	product.DescriptionValidator = productDescDescription.Validators[0].(func(string) error)
	// productDescPrice is the schema descriptor for price field.
	productDescPrice := productFields[2].Descriptor()
	// product.PriceValidator is a validator for the "price" field. It is called by the builders before save.
	product.PriceValidator = productDescPrice.Validators[0].(func(float64) error)
}
