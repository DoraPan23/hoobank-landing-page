import { Component } from '@angular/core';

import { clients } from 'src/constants';
import { styles } from 'src/style';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  clients = clients;
  styles = styles;
}
