import { DataTypes } from 'sequelize';
import connection from '../database/connection';

const Product = connection.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
}, {
  tableName: 'products'
});

export default Product;
