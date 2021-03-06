import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from '../../../../../../services/storage.service';
@Component({
  selector: 'app-jingyuanwen',
  templateUrl: './jingyuanwen.component.html',
  styleUrls: ['./jingyuanwen.component.css']
})
export class JingyuanwenComponent implements OnInit {
  @ViewChild("yuanwentext") yuanwentext:any;
  public yuanwen:any;
  constructor(public storage:StorageService) { }

  ngOnInit() {
    this.yuanwen=this.storage.get("yuanwen");
    this.yuanwentext.nativeElement.innerHTML=this.yuanwen.yuanwen;
  }

}
