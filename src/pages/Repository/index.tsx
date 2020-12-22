import React, { useEffect, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, CardRepo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface DetailRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<DetailRepository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explores" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <CardRepo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </CardRepo>
      )}
      <Issues>
        {issues.map(issue => (
          <Link key={issue.id} to={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={24} />
          </Link>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
