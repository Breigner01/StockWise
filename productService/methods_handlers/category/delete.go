package category

import (
	"context"

	categoryService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/category"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func (s *Server) DeleteCategory(ctx context.Context, input *category.Category) (*category.Status, error) {

	err := categoryService.DeleteCategory(s.conf, int(input.GetId()))

	if err != nil {
		return &category.Status{StatusMessage: "Failed to delete category"}, err
	}
	return &category.Status{StatusMessage: "Deleted"}, nil
}
