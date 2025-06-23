import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>
    ){}

    create(note: Partial<Note>){
        const newNote = this.noteRepository.create(note)
        return this.noteRepository.save(newNote)
    }

    findAll(){
        return this.noteRepository.find()
    }

    findOne(id: number){
        return this.noteRepository.findOne({where: {id}})
    }

    async update(id: number, note: Partial<Note>){
        this.noteRepository.update(id,note)
        return this.findOne(id)
    }

    async remove(id: number){
        this.noteRepository.delete(id)
        return {
            deleted: true
        }
    }
}
