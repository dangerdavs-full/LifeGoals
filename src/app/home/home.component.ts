import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  metas: Meta[] = [];
  newMetaText: string = '';

  constructor(private metaService: MetaServiceService) {}

  ngOnInit(): void {
    this.metaService.getMetas().subscribe(data => {
      this.metas = data;
    });
  }

  addMeta(): void {
    if (this.newMetaText.trim().length === 0) return;

    const newMeta: Meta = {
      meta: this.newMetaText.trim()
    };

    this.metaService.addMeta(newMeta).then(() => {
      this.newMetaText = ''; // Clear the input
    }).catch(error => {
      console.error('Error adding meta: ', error);
    });
  }

  deleteMeta(id: string | undefined): void {
    if (!id) return;
    this.metaService.deleteMeta(id).catch(error => {
      console.error('Error removing meta: ', error);
    });
  }
}
