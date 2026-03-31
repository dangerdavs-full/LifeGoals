import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {
  private collectionName = 'metas';

  constructor(private firestore: AngularFirestore) { }

  getMetas(): Observable<Meta[]> {
    return this.firestore.collection<Meta>(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Meta;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addMeta(meta: Meta): Promise<any> {
    return this.firestore.collection(this.collectionName).add(meta);
  }

  deleteMeta(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
