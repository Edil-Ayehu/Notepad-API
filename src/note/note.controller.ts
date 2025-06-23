import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.entity';

@Controller('note')
export class NoteController {
    constructor(
        private readonly noteService: NoteService
    ){}

    @Post()
    create(@Body() note: Partial<Note>){
        return this.noteService.create(note)
    }

    @Get()
    findAll(){
        return this.noteService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.noteService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() note: Partial<Note>){
        return this.noteService.update(id,note)
    }

    @Delete(':id')
    remote(@Param('id', ParseIntPipe) id:number) {
        return this.noteService.remove(id)
    }
}
