import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-list-note-article',
  templateUrl: './list-note-article.component.html',
  styleUrls: ['./list-note-article.component.scss']
})
export class ListNoteArticleComponent implements OnInit {

  noteArticleList: Note[];
  editNote: Note;
  deleteNote: Note;

  id : number;
  p : number=1;
  searchText;


  constructor(private noteService: NoteService,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.getListNotes();
  }

  public getListNotes(): void {
    this.noteService.getNotifications().subscribe(
      (response: Note[]) => {
        this.noteArticleList = response;
     //   console.log(this.categories[0].idCategory);
        console.log(this.noteArticleList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEditNote(i) {

  }
  public onDeleteNote(noteId: number): void {
    this.noteService.deleteNotification(noteId).subscribe(
      (response: void) => {
        console.log(response);
        this.getListNotes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
