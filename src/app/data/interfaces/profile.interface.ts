export interface Profile {
  id: number,
  username: string | null,
  avatarUrl: string,
  description: string,
  subscribersAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string,
}