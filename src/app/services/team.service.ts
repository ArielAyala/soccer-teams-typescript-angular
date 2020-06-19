import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Team } from '../interfaces/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const TeampTableHeaders = ['name', 'country', 'players'];

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamDb: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teamDb = this.db.list('/teams', ref => ref.orderByChild('name'));
  }

  getTeams(): Observable<Team[]> {
    return this.teamDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
      })
    )
  }

  addTeam(team: Team) {
    this.teamDb.push(team);
  }

  deleteTeam(id: string) {
    this.db.list('/temas').remove(id);
  }

  editTeam(newTeamData) {
    const $key = newTeamData.$key;
    delete (newTeamData.$key);
    this.db.list('/teams').update($key, newTeamData);
  }
}
