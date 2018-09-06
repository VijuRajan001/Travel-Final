import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
@Component({
    selector: 'dashboard-home',
    templateUrl: './dashboard-home.component.html'
})
export class DashBoardHomeComponent implements OnInit {

    ngOnInit() {
        console.log('inside dashborad components');
    }
}
