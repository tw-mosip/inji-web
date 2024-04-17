import React, {useEffect, useState} from 'react';
import {Autocomplete, CircularProgress, Grid, IconButton, TextField, Typography,} from '@mui/material';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import {getCertificatesAutoCompleteOptions} from '../../utils/misc';
import {BackArrowIcon} from '../Icons/BackArrowIcon';

export const StyledHeader = styled(Box)`
    background-color: #f2fbff;
    height: 120px;
    width: 100%;
`;

const StyledGrid = styled(Grid)`
    max-width: 1140px;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
`;

const IssuerTitle = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    font-family: Inter;
`;

function Header({
                    issuerDisplayName,
                    loading,
                    credentialsList,
                    updateCredentialsList,
                    defaultList,
                }) {
    const navigate = useNavigate();
    const [defaultOptions, setDefaultOptions] = useState([]);

    useEffect(() => {
        setDefaultOptions(defaultList);
    }, [defaultList]);

    return (
        <StyledHeader>
            <StyledGrid container>
                <Grid item xs={6}>
                    <Box
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                        <IconButton
                            style={{marginRight: '18px'}}
                            onClick={() => {
                                navigate('/');
                            }}>
                            <BackArrowIcon/>
                        </IconButton>
                        <IssuerTitle>
                            {loading && !issuerDisplayName ? (
                                <CircularProgress/>
                            ) : (
                                issuerDisplayName
                            )}
                        </IssuerTitle>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        options={getCertificatesAutoCompleteOptions(
                            defaultOptions,
                        )}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="Search Credentials"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                                onSelect={event => {
                                    event.preventDefault();
                                    console.log(event);
                                    let value = event?.target?.value;
                                    if (value) {
                                        updateCredentialsList(
                                            defaultOptions.filter(cred =>
                                                cred?.display[0].name
                                                    .toLowerCase()
                                                    .includes(
                                                        value.toLowerCase(),
                                                    ),
                                            ),
                                        );
                                    } else {
                                        updateCredentialsList(defaultOptions);
                                    }
                                }}
                                onClick={event => {
                                    if (!event?.target?.value) {
                                        updateCredentialsList(defaultOptions);
                                    }
                                }}
                            />
                        )}
                    />
                </Grid>
            </StyledGrid>
        </StyledHeader>
    );
}

export default Header;
