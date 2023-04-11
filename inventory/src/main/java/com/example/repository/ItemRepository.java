package com.example.repository;

import com.example.dao.ItemDao;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface ItemRepository extends CrudRepository<ItemDao, ItemDao.ItemPK> {
    ItemDao findByItemPK(ItemDao.ItemPK itemPK);

    void updateByItemPK(ItemDao.ItemPK itemPK, ItemDao itemDao);

    Iterable<ItemDao> findAllBySku(String sku);
}
