package category

import (
	"context"
	categoryService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/category"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func (s *Server) GetAllCategories(ctx context.Context) (*category.Categories, error) {

	categories, err := categoryService.GetAllCategories(s.conf)

	if err != nil {
		return nil, err
	}
	return &category.Categories{Categories: categories}, nil
}
