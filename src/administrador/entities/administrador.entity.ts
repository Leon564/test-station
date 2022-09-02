import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {direccion} from '../dto/create-administrador.dto';

export type AdminDocument = Administrador & Document;

@Schema()
export class Administrador {
  _id: mongoose.Types.ObjectId;
  @Prop()
  nombre: String;
  @Prop()
  email: String;
  @Prop()
  usuario: String;
  @Prop()
  contraseña: String;
  @Prop()
  direccion: direccion[];
}
export const AdministradorSchema = SchemaFactory.createForClass(Administrador);
