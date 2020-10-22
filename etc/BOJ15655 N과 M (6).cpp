#include <iostream>
#include <algorithm>

using namespace std;

int N,M,inp[8];

void perm(int num, int idx, int c) {
  if(c == M) {
    for(int i=0; i<N; i++) {
      if(num & (1<<i)) cout<<inp[i]<<" ";
    }
    cout<<"\n";
    return;
  }
  for(int i=idx; i<N; i++) {
    if(!(num & (1<<i))) perm(num|(1<<i), i+1, c+1);
  }
}

int main() {
  cin>>N>>M;
  for(int i=0; i<N; i++) cin>>inp[i];
  sort(inp, inp+N);
  perm(0, 0, 0);
  return 0;
}