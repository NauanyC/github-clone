import { APIRepository, APIUser } from '../@types';
import { Repository } from '../interfaces/repository';
import { User } from '../interfaces/user';

export const extractUserFromApiResponse = (userData: APIUser): User => {
  const {
    login,
    name,
    followers,
    following,
    public_repos,
    avatar_url,
    blog,
    company,
    email,
    location,
  } = userData;

  return {
    username: login,
    name,
    avatarUrl: avatar_url ?? '',
    followers,
    following,
    company: company ?? '',
    location: location ?? '',
    email: email ?? '',
    blog: blog ?? '',
    repositoriesCount: public_repos,
  };
};

export const extractRepositoriesFromApiResponse = (
  repositoriesData: Array<APIRepository>
): Array<Repository> => {
  return repositoriesData.map((repository) => ({
    username: repository.owner.login,
    reponame: repository.name,
    description: repository.description,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks,
  }));
};
