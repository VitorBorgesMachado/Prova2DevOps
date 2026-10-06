import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async findAll() {
    return this.inventoryRepository.find();
  }

  async findOne(id: number) {
    const item = await this.inventoryRepository.findOne({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }

    return item;
  }

  async create(createInventoryDto: CreateInventoryDto) {
    const item = this.inventoryRepository.create(createInventoryDto);

    return this.inventoryRepository.save(item);
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    const item = await this.findOne(id);

    Object.assign(item, updateInventoryDto);

    return this.inventoryRepository.save(item);
  }

  async remove(id: number) {
    const item = await this.findOne(id);

    await this.inventoryRepository.remove(item);

    return {
      message: 'Item removido com sucesso',
    };
  }
}