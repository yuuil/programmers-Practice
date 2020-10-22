#include <iostream>
#include <algorithm>

using namespace std;

int N,M,inp[8];

void perm(int* p, int num, int c) {
  if(c == M) {
    for(int i=0; i<M; i++) cout<<p[i]<<" ";
    cout<<"\n";
    return;
  }
  for(int i=0; i<N; i++) {
    if(!(num & (1<<i))) {
      p[c] = inp[i];
      perm(p, num|(1<<i), c+1);
    }
  }
}

int main() {
  int p[8] = {0,};
  cin>>N>>M;
  for(int i=0; i<N; i++) cin>>inp[i];
  sort(inp, inp+N);
  perm(p, 0, 0);
  return 0;
}