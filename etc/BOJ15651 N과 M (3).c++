#include <iostream>

using namespace std;

int N, M;

void perm(int* p, int c) {
  if(c == M) {
    for(int i=0; i<M; i++) cout<<p[i]<<" ";
    cout<<"\n";
    return;
  }
  for(int i=0; i<N; i++) {
    p[c] = i + 1;
    perm(p, c+1);
  }
}

int main() {
  cin>>N>>M;
  int p[7] = {0,};
  perm(p, 0);
  return 0;
}