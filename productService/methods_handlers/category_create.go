package methods_handlers

import (
	"context"
	categoryService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/category"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func (s *Server) CreateCategory(ctx context.Context, input *category.Name) (*category.Status, error) {

	err := categoryService.CreateCategory(s.conf, &category.Category{Name: input.GetName()})

	if err != nil {
		return &category.Status{StatusMessage: "Failed to create category"}, err
	}
	return &category.Status{StatusMessage: "Created"}, nil
}
