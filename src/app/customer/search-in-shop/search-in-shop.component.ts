import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-in-shop',
  templateUrl: './search-in-shop.component.html',
  styleUrls: ['./search-in-shop.component.scss']
})
export class SearchInShopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchArticleInShop(keyword: string) {
    console.log("keyword+++", keyword);
    this.router.navigateByUrl('/searchInshop/'+keyword);

  }

}
