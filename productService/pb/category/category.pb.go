// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.22.2
// source: category.proto

package __

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Name struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Name) Reset() {
	*x = Name{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Name) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Name) ProtoMessage() {}

func (x *Name) ProtoReflect() protoreflect.Message {
	mi := &file_category_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Name.ProtoReflect.Descriptor instead.
func (*Name) Descriptor() ([]byte, []int) {
	return file_category_proto_rawDescGZIP(), []int{0}
}

func (x *Name) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Status struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	StatusMessage string `protobuf:"bytes,1,opt,name=statusMessage,proto3" json:"statusMessage,omitempty"`
}

func (x *Status) Reset() {
	*x = Status{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Status) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Status) ProtoMessage() {}

func (x *Status) ProtoReflect() protoreflect.Message {
	mi := &file_category_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Status.ProtoReflect.Descriptor instead.
func (*Status) Descriptor() ([]byte, []int) {
	return file_category_proto_rawDescGZIP(), []int{1}
}

func (x *Status) GetStatusMessage() string {
	if x != nil {
		return x.StatusMessage
	}
	return ""
}

type NoParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *NoParam) Reset() {
	*x = NoParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NoParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NoParam) ProtoMessage() {}

func (x *NoParam) ProtoReflect() protoreflect.Message {
	mi := &file_category_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NoParam.ProtoReflect.Descriptor instead.
func (*NoParam) Descriptor() ([]byte, []int) {
	return file_category_proto_rawDescGZIP(), []int{2}
}

type Category struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Category) Reset() {
	*x = Category{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Category) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Category) ProtoMessage() {}

func (x *Category) ProtoReflect() protoreflect.Message {
	mi := &file_category_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Category.ProtoReflect.Descriptor instead.
func (*Category) Descriptor() ([]byte, []int) {
	return file_category_proto_rawDescGZIP(), []int{3}
}

func (x *Category) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Category) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Categories struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Categories []*Category `protobuf:"bytes,1,rep,name=Categories,proto3" json:"Categories,omitempty"`
}

func (x *Categories) Reset() {
	*x = Categories{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Categories) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Categories) ProtoMessage() {}

func (x *Categories) ProtoReflect() protoreflect.Message {
	mi := &file_category_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Categories.ProtoReflect.Descriptor instead.
func (*Categories) Descriptor() ([]byte, []int) {
	return file_category_proto_rawDescGZIP(), []int{4}
}

func (x *Categories) GetCategories() []*Category {
	if x != nil {
		return x.Categories
	}
	return nil
}

var File_category_proto protoreflect.FileDescriptor

var file_category_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x22, 0x1a, 0x0a, 0x04, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x2e, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x24, 0x0a, 0x0d, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x09, 0x0a, 0x07, 0x4e, 0x6f, 0x50, 0x61, 0x72, 0x61,
	0x6d, 0x22, 0x2e, 0x0a, 0x08, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0x40, 0x0a, 0x0a, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x12,
	0x32, 0x0a, 0x0a, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x43,
	0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x52, 0x0a, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x69, 0x65, 0x73, 0x32, 0xf2, 0x01, 0x0a, 0x0f, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x32, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x0e, 0x2e, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x2e, 0x4e, 0x61, 0x6d, 0x65, 0x1a, 0x10, 0x2e, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x36, 0x0a, 0x0e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x12, 0x2e,
	0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x1a, 0x10, 0x2e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x36, 0x0a, 0x0e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x61, 0x74,
	0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x12, 0x2e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x1a, 0x10, 0x2e, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x3b, 0x0a, 0x10, 0x47,
	0x65, 0x74, 0x41, 0x6c, 0x6c, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x12,
	0x11, 0x2e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x4e, 0x6f, 0x50, 0x61, 0x72,
	0x61, 0x6d, 0x1a, 0x14, 0x2e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x43, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x42, 0x04, 0x5a, 0x02, 0x2e, 0x2f, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_category_proto_rawDescOnce sync.Once
	file_category_proto_rawDescData = file_category_proto_rawDesc
)

func file_category_proto_rawDescGZIP() []byte {
	file_category_proto_rawDescOnce.Do(func() {
		file_category_proto_rawDescData = protoimpl.X.CompressGZIP(file_category_proto_rawDescData)
	})
	return file_category_proto_rawDescData
}

var file_category_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_category_proto_goTypes = []interface{}{
	(*Name)(nil),       // 0: category.Name
	(*Status)(nil),     // 1: category.Status
	(*NoParam)(nil),    // 2: category.NoParam
	(*Category)(nil),   // 3: category.Category
	(*Categories)(nil), // 4: category.Categories
}
var file_category_proto_depIdxs = []int32{
	3, // 0: category.Categories.Categories:type_name -> category.Category
	0, // 1: category.CategoryService.CreateCategory:input_type -> category.Name
	3, // 2: category.CategoryService.UpdateCategory:input_type -> category.Category
	3, // 3: category.CategoryService.DeleteCategory:input_type -> category.Category
	2, // 4: category.CategoryService.GetAllCategories:input_type -> category.NoParam
	1, // 5: category.CategoryService.CreateCategory:output_type -> category.Status
	1, // 6: category.CategoryService.UpdateCategory:output_type -> category.Status
	1, // 7: category.CategoryService.DeleteCategory:output_type -> category.Status
	4, // 8: category.CategoryService.GetAllCategories:output_type -> category.Categories
	5, // [5:9] is the sub-list for method output_type
	1, // [1:5] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_category_proto_init() }
func file_category_proto_init() {
	if File_category_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_category_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Name); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_category_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Status); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_category_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NoParam); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_category_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Category); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_category_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Categories); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_category_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_category_proto_goTypes,
		DependencyIndexes: file_category_proto_depIdxs,
		MessageInfos:      file_category_proto_msgTypes,
	}.Build()
	File_category_proto = out.File
	file_category_proto_rawDesc = nil
	file_category_proto_goTypes = nil
	file_category_proto_depIdxs = nil
}
