package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Product holds the schema definition for the Product entity.
type Product struct {
	ent.Schema
}

// Fields of the Product.
func (Product) Fields() []ent.Field {
	return []ent.Field{
		field.String("name").
			NotEmpty(),
		field.Text("description").
			NotEmpty().
			Default(""),
		field.Float("price").
			Min(0),
	}
}

// Edges of the Product.
func (Product) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("brand", Brand.Type).
			Unique(),
		edge.To("category", Category.Type).
			Unique(),
	}
}
