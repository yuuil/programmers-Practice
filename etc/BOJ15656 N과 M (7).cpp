#include <iostream>
#include <algorithm>

using namespace std;

int N,M,inp[8];

void perm(int* p, int c) {
  if(c == M) {
    for(int i=0; i<M; i++) cout<<p[i]<<" ";
    cout<<"\n";
    return;
  }
  for(int i=0; i<N; i++) {
      p[c] = inp[i];
      perm(p, c+1);
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int p[8] = {0,};
  cin>>N>>M;
  for(int i=0; i<N; i++) cin>>inp[i];
  sort(inp, inp+N);
  perm(p, 0);
  return 0;
}