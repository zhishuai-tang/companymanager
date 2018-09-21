/**
 * @Author: zhishuai-tang
 * @Date: 2018/9/18 11:34
 * @Version: 1.0
 */

import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import $ from 'jquery';
import './usermanager.css';

export default class UserManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            searchText: '',
            selectedRowKeys: [], // Check here to configure the default column
        };
    }

    handleTableChange = (pagination, filters, sorter) => {
        console.log(filters);
        const pager = {...this.state.pagination};
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            pageSize: pagination.pageSize,
            pageNum: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({loading: true});
        $.ajax({
            type: 'POST',
            url: '/users/getUsers',
            data: {
                pageSize: 10,
                ...params,
            },
            success: data => {
                const pagination = {...this.state.pagination};
                pagination.total = data.total;
                this.setState({
                    loading: false,
                    data: data.list,
                    pagination
                });
            }
        });
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    componentDidMount() {
        this.fetch();
    }

    render() {
        const colums = [{
            title: '工号',
            dataIndex: 'jobNum',
            key: 'jobNum',
            sorter: 'true',
            width: '10%'
        },{
            title: '姓名',
            dataIndex: 'username',
            key: 'username',
            sorter: true,
            width: '15%',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div className="custom-filter-dropdown">
                    <Input
                        ref={ele => this.searchInput = ele}
                        placeholder="Search name"
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={this.handleSearch(selectedKeys, confirm)}
                    />
                    <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>查找</Button>
                    <Button onClick={this.handleReset(clearFilters)}>重置</Button>
                </div>
            ),
            filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
            //onFilter: (value, record) => record.username.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        this.searchInput.focus();
                    });
                }
            },
            render: (text) => {
                const { searchText } = this.state;
                return searchText ? (
                    <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                    ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
                ) : text;
            },
        },{
            title: '手机号码',
            dataIndex: 'telephone',
            key: 'telephone',
            width: '15%'
        },{
            title:'性别',
            dataIndex: 'gender',
            key: 'gender',
            filter: [
                {text: 'Male', value: 'male'},
                {text: 'Female', value: 'female'}
            ],
            width: '10%',
            render: (text) => <span>{text===1 ? '男' : '女'}</span>
        },{
            title: '入职日期',
            dataIndex: 'entryDate',
            key: 'entryDate',
            width: '15%'
        },{
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
            width: '15%'
        },{
            title: '家庭地址',
            dataIndex: 'address',
            key: 'address',
            width: '20%'
        }];

        const { loading, selectedRowKeys } = this.state;

        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        const hasSelected = selectedRowKeys.length > 0;

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        修改
                    </Button>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={colums}
                    rowKey={record => record.jobNum}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>
        );
    }
}