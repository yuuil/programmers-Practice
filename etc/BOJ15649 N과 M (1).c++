#include <iostream>

using namespace std;

int N, M;

void perm(int* p, int num, int c) {
  if(c == M) {
    for(int i=0; i<M; i++) cout<<p[i]<<" ";
    cout<<"\n";
    return;
  }
  for(int i=0; i<N; i++) {
    if(!(num&(1<<i))) {
      p[c] = i+1;
      perm(p, num|(1<<i), c+1);
    }
  }
}

int main() {
  cin>>N>>M;
  int p[8] = {0,};
  perm(p, 0, 0);
}