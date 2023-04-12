package category

import (
	"context"

	categoryService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/category"

	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func (s *Server) UpdateCategory(ctx context.Context, input *category.Category) (*category.Status, error) {

	err := categoryService.UpdateCategory(s.conf, input)

	if err != nil {
		return &category.Status{StatusMessage: "Failed to update category"}, err
	}
	return &category.Status{StatusMessage: "Updated"}, nil
}
