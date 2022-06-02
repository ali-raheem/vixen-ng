import { Injectable } from '@angular/core';

import * as sha256 from "fast-sha256";

@Injectable({
  providedIn: 'root'
})
export class HashcashService {

  constructor() { }

  getPoW(minCost: number): string | null {
    const timestamp = Date.now()
    const nonce = Math.floor(Math.random() * 9999999)
    for(let i = 0; i < 2000000; i++) {
      const proof = timestamp+"-"+nonce+"-"+i;
      const encoder = new TextEncoder()
      const hasher = new sha256.Hash();
      hasher.update(encoder.encode(proof))
      const hash = hasher.digest()
      let cost = 0;
      for (var j= 0; j < hash.length; j++) {
        if (hash[j] == 0) {
          cost++;
        } else {
          break;
        }
      }

      if (cost > minCost) {
        return proof
      }
    }

    return null
  }
}
