import { DialogService } from './../../services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { NoteDto } from './../../models/note';
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

  notificationDTOList: NoteDto[];
  deleteNotificationDTO: NoteDto;

  id : number;
  p : number=1;
  searchText;

  constructor(private noteService: NoteService,
              private router: Router,
              private dialog: MatDialog,
              public toastr: ToastrService,
              private dialogService: DialogService
              ){}

  ngOnInit(): void {
    this.getNotificationDtos();
  }

  public getNotificationDtos(): void {
    this.noteService.getNotificationDTOs().subscribe(
      (response: NoteDto[]) => {
        this.notificationDTOList = response;
        console.log(this.notificationDTOList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

/*   public onDeleteNotification(note: NoteDto): void{
    this.dialogService.openConfirmDialog('Etes-vous sur de vouloir Supprimer cet donnée ?')
    .afterClosed().subscribe((response: any) =>{
      if(response){
        this.noteService.deleteNotificationDTO(note.id).subscribe(data => {
          this.toastr.warning('Notification supprimé avec succès!');
          this.notificationDTOList = this.notificationDTOList.filter(u => u !== note);
          this.getNotificationDtos();
        });
      }
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  } */

  public onDeleteNotification(note: NoteDto): void{
        this.noteService.deleteNotificationDTO(note.id).subscribe(data => {
          this.toastr.warning('Notification supprimé avec succès!');
          this.notificationDTOList = this.notificationDTOList.filter(u => u !== note);
          this.getNotificationDtos();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

}
