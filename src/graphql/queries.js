/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      pin
      createdAt
      updatedAt
      description
      players {
        items {
          id
          accountID
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      devices {
        items {
          id
          accountID
          name
          note
          number
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          level
          accountID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pin
        createdAt
        updatedAt
        description
        players {
          nextToken
        }
        devices {
          nextToken
        }
        logs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      accountID
      name
      imageUrl
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountID
        name
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      accountID
      name
      note
      number
      createdAt
      updatedAt
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountID
        name
        note
        number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLog = /* GraphQL */ `
  query GetLog($id: ID!) {
    getLog(id: $id) {
      id
      level
      accountID
      score
      createdAt
      updatedAt
    }
  }
`;
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        level
        accountID
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
