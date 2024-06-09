//Imported database
import { poolsql } from "../config/db.js";
import db from '../models/index.js'
//Encrypting password
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = async (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  // console.log(`>>>hashPassword`, hashPassword)
  return hashPassword;
};

//Handling database "CRUD"
const getUserList = async (email, password, username) => {
  try {
    const [results, fields] = await poolsql.query(`SELECT * FROM users `);
    // console.log("SELECTED SUCCESSFULLY:", results);
    return results;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
const createNewUser = async (email, password, username) => {
  try {
    const hashPass = await hashUserPassword(password);

    // // Insert user into database using poolsql.query
    // const [results, fields] = await poolsql.execute(
    //   `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    //   [email, hashPass, username]
    // );

    // // console.log("User created successfully:", results);
    // //   return results.insertId;
    // return results;
    await db.user.create({ 
      email: email, 
      password: hashPass,
      username: username,
     });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
const deleteUser = async (userId) => {
  try {
    const [results, fields] = await poolsql.execute(
      `DELETE FROM users WHERE id = ?`,
      [userId]
    );
    return results;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const getIdUserUpdate = async (userId) => {
  try {
    const [results, fields] = await poolsql.execute(
      `SELECT * FROM users WHERE id = ?`,
      [userId]
    );
    return results;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const updateUser = async (id, email, username) => {
  try {
    const [results, fields] = await poolsql.execute(
      `UPDATE users
      SET email = ?, username = ?
      WHERE id = ?;`,
      [email, username,id] //remember that put in order
    );
    return results;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export { createNewUser, deleteUser, getUserList, getIdUserUpdate, updateUser };

// let check = bcrypt.compareSync(password, hashPassword)
// console.log(`>>>check`, check)
