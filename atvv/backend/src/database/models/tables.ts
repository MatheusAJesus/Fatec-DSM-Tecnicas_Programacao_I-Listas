import { DataTypes } from "sequelize";
import db from "../config";


export const RgModel = db.define("rg", {
    rg_codigo: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  rg_numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cli_codigo: {
    type: DataTypes.INTEGER.UNSIGNED
  },
  rg_data_emissao: {
    type: DataTypes.DATEONLY
  }
});


export const TelefoneModel = db.define("telefone", {
    tel_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    tel_numero: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


  export const ClienteModel = db.define("cliente", {
    cli_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    cli_nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cli_cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },

    cli_rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cli_nome_social: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    cli_data_cadastro: {
        type: DataTypes.DATEONLY
    },
    cli_telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cli_genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


  export const ProdutoModel = db.define("produto", {
    prod_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    prod_descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prod_valor: {
      type: DataTypes.INTEGER,
    }
  });

  export const ServicoModel = db.define("servico", {
    serv_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    serv_descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serv_valor: {
      type: DataTypes.DECIMAL,
    }
  });

  export const PedidoModel = db.define("pedido", {
    ped_numero: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    cli_codigo: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    ped_valor_total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  export const ItemPedidoModel = db.define("item_pedido", {
    prod_codigo: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    serv_codigo: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    item_quantidade: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    ped_numero: {
      type: DataTypes.INTEGER.UNSIGNED
    },
  });


  // Relacionamentos:

ClienteModel.hasMany(TelefoneModel);
TelefoneModel.belongsTo(ClienteModel);

ClienteModel.hasMany(RgModel);
RgModel.belongsTo(ClienteModel);