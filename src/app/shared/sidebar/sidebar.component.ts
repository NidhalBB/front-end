import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  public PhasePreliminaire=false;
  public EssaiPilote=false;
  public EtudeMarche=false;
  public exploration=false;
  public Gestion=false;
  public Produit =false;
  public prospection=false;
  public commercial = false;
  public achat=false;
  public stock = false;
  public Imo=false;
  public machines = false;
  public minerale =false;
  public rh = false;
  public Vente = false;
  public distribution =false;
  public Logistique = false;
  public indicateur = false;
  public ach = false;
  public ex = false;
  public prod = false ;
  constructor() { }

  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
