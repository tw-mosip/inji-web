import React from 'react';
import GridComponent from '../Atoms/GridComponent';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import {getESignetRedirectURL} from '../../utils/config';
import {generateCodeChallenge, generateRandomString,} from '../../utils/oauth-utils';
import DownloadIcon from '../Icons/DownloadIcon.js';
import {addNewSession} from '../../utils/sessionUtils';
import {TextWrapper} from '../Common/Text/TextWrapper';

const CertificatesBox = styled(Box)`
  margin: 30px auto;
  max-width: 1140px;
`;

const getCardsData = (
    issuerId,
    issuerDisplayName,
    authEndpoint,
    credentialList,
    clientId,
) => {
    return credentialList.map(cred => {
        return {
            imageUrl: cred.display[0].logo.url,
            title: cred.display[0].name,
            icon: <DownloadIcon/>,
            onClick: () => {
                let {codeVerifier, codeChallenge} = generateCodeChallenge();
                let state = generateRandomString();
                addNewSession({
                    issuerId,
                    issuerDisplayName,
                    certificateId: cred.id,
                    codeVerifier: codeVerifier,
                    state: state,
                    clientId: clientId,
                });
                window.location.assign(
                    getESignetRedirectURL(
                        authEndpoint,
                        cred.scope,
                        clientId,
                        codeChallenge,
                        state,
                    ),
                );
            },
            clickable: true,
        };
    });
};

function CertificateList({
                             issuerId,
                             issuerDisplayName,
                             authEndpoint,
                             credentialList,
                             clientId,
                         }) {
    const cards = getCardsData(
        issuerId,
        issuerDisplayName,
        authEndpoint,
        credentialList,
        clientId,
    );
    return (
        <CertificatesBox>
            <TextWrapper variant="h6">List of Credentials</TextWrapper>
            <GridComponent cards={cards}/>
        </CertificatesBox>
    );
}

export default CertificateList;
