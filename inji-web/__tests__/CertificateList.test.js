import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Certificate from '../src/pages/CertificatePage';
import CertificateList from '../src/components/Certificate/CertificateList';
import {
    SampleCredentialsSupportedData,
    SampleIssuersData,
} from '../src/__mocks__/testData';

test('Test Certificate List', () => {
    const issuer = SampleIssuersData.response.issuers[0];
    render(
        <CertificateList
            clientId={issuer.client_id}
            authEndpoint={''}
            issuerDisplayName={issuer.display[0].title}
            issuerId={issuer.credential_issuer}
            credentialList={
                SampleCredentialsSupportedData.response.supportedCredentials
            }
        />,
    );
    expect(screen.getByText('List of Credentials')).toBeInTheDocument();
    expect(screen.getByText('Sunbird Life Insurance')).toBeInTheDocument();
    expect(screen.getByText('MOSIP Insurance')).toBeInTheDocument();
});
